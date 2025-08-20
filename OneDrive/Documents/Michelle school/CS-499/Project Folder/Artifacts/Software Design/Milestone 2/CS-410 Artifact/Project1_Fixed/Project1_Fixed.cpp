#include <iostream>
#include <string> // Needed for username and password
using namespace std;

// FIXED: Simulates a secure permission check using user input
int CheckUserPermissionAccess() {
    int userPermission = 0;
    string username;
    string password;

    cout << "Checking user permission..." << endl;

    // FIXED: Added basic username/password prompt instead of hardcoded logic
    cout << "Enter username: ";
    cin >> username;
    cout << "Enter password: ";
    cin >> password;

    // FIXED: Replaced hardcoded permission with simple input-based check
    // VULNERABILITY FIXED: Original code set userPermission = 1 directly (insecure, always admin)
    if (username == "admin" && password == "password123") {
        userPermission = 1; // Administrator
    } else {
        userPermission = 2; // Limited user
    }

    return userPermission;
}

// FIXED: Removed sensitive personal details from output
void DisplayInfo() {
    cout << "Displaying user information..." << endl;

    // VULNERABILITY FIXED: Original code printed hardcoded full name and admin role
    // Now it only prints generic placeholder info
    cout << "User: Access granted." << endl;
}

// FIXED: Added real user input and validation for choice selection
void ChangeCustomerChoice() {
    int choice;

    // FIXED: Replaced hardcoded choice = 2 with input from user
    cout << "Enter your customer choice (1-5): ";
    cin >> choice;

    // VULNERABILITY FIXED: Original code had no input validation or user input
    // This version checks that input is in valid range and handles errors
    if (cin.fail() || choice < 1 || choice > 5) {
        cout << "Invalid choice. Please enter a number between 1 and 5." << endl;
        return;
    }

    switch (choice) {
        case 1:
            cout << "Choice set to Option 1" << endl;
            break;
        case 2:
            cout << "Choice set to Option 2" << endl;
            break;
        case 3:
            cout << "Choice set to Option 3" << endl;
            break;
        case 4:
            cout << "Choice set to Option 4" << endl;
            break;
        case 5:
            cout << "Choice set to Option 5" << endl;
            break;
    }
}

int main() {
    // FIXED: Removed personal creator information to avoid hardcoding identity
    cout << "Welcome to the SNHU Investments Client Application" << endl;

    int permission = CheckUserPermissionAccess();

    // FIXED: Added logging of permission result
    cout << "Access level: " << permission << endl;

    // VULNERABILITY FIXED: Original code ran DisplayInfo() with no user feedback or logging
    // Now it only runs if permission level is 1 (admin)
    if (permission == 1) {
        DisplayInfo();
    } else {
        cout << "Limited access granted. You do not have admin privileges." << endl;
    }

    ChangeCustomerChoice();

    return 0;
}
