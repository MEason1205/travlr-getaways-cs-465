#include <iostream>
#include <string>
#include <unordered_map>
#include <functional>
#include <stdexcept>
#include <algorithm>
#include <limits>

#if defined(_WIN32)
  #include <conio.h>
  std::string getPassword(const std::string& prompt) {
    std::cout << prompt;
    std::string pwd;
    char ch;
    while ((ch = _getch()) != '\r') {
      if (ch == '\b' && !pwd.empty()) { // backspace
        pwd.pop_back();
        std::cout << "\b \b";
      } else if (ch != '\b') {
        pwd.push_back(ch);
        std::cout << '*';
      }
    }
    std::cout << "\n";
    return pwd;
  }
#else
  #include <termios.h>
  #include <unistd.h>
  std::string getPassword(const std::string& prompt) {
    std::cout << prompt;
    termios oldt, newt;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~ECHO;
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    std::string pwd;
    std::getline(std::cin, pwd);
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    std::cout << "\n";
    return pwd;
  }
#endif

// Constant‑time comparison to mitigate timing attacks
bool constantTimeEqual(const std::string& a, const std::string& b) {
  if (a.size() != b.size()) return false;
  unsigned char result = 0;
  for (size_t i = 0; i < a.size(); ++i) {
    result |= a[i] ^ b[i];
  }
  return result == 0;
}

// A very simple (non‑cryptographic) hash stub; replace with real crypto in production
std::string hashPassword(const std::string& pwd) {
  std::hash<std::string> h;
  return std::to_string(h(pwd));
}

class AuthService {
public:
  enum class Permission { Admin, Limited };

  AuthService() {
    // In a real app, load from secure store + salt + proper hash
    userDb_["admin"] = hashPassword("password123");
    userDb_["guest"] = hashPassword("guestpass");
  }

  Permission authenticate() const {
    std::cout << "=== Login ===\n";
    std::cout << "Username: ";
    std::string user;
    std::getline(std::cin, user);

    std::string pwd = getPassword("Password: ");
    auto it = userDb_.find(user);
    if (it != userDb_.end()
        && constantTimeEqual(it->second, hashPassword(pwd)))
    {
      std::cout << "[LOG] Admin login successful\n";
      return Permission::Admin;
    }
    std::cout << "[LOG] Limited user login\n";
    return Permission::Limited;
  }

private:
  std::unordered_map<std::string,std::string> userDb_;
};

class Application {
public:
  void run() {
    std::cout << "Welcome to the SNHU Investments App\n";
    AuthService::Permission p = auth_.authenticate();
    if (p == AuthService::Permission::Admin) {
      displayInfo();
    } else {
      std::cout << "Limited access granted.\n";
    }
    int choice = readChoice(1,5);
    std::cout << "Choice set to Option " << choice << "\n";
  }

private:
  AuthService auth_;

  static void displayInfo() {
    std::cout << "Displaying user information...\n";
    // further details sanitized
  }

  static int readChoice(int min, int max) {
    while (true) {
      std::cout << "Enter your customer choice (" << min << "-" << max << "): ";
      int c;
      if (!(std::cin >> c) || c < min || c > max) {
        std::cout << "Invalid. Please enter a number between " << min << " and " << max << ".\n";
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        continue;
      }
      std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
      return c;
    }
  }
};

int main() {
  try {
    Application app;
    app.run();
  } catch (const std::exception& ex) {
    std::cerr << "[ERROR] " << ex.what() << "\n";
    return EXIT_FAILURE;
  }
  return EXIT_SUCCESS;
}
