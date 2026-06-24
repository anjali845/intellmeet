# IntellMeet - Database & Authentication Documentation

## 1. User Schema

The User schema stores information about all registered users of the IntellMeet platform.

| Field           | Type              | Description                            |
| --------------- | ----------------- | -------------------------------------- |
| Name            | String            | Full name of the user                  |
| Email           | String            | Unique email address used for login    |
| Password        | String            | Hashed password stored securely        |
| Profile Picture | String (Optional) | URL of the user's profile image        |
| Created At      | Date              | Timestamp when the account was created |

### Example User Document

json
{
  "_id": "user123",
  "name": "ABC",
  "email": "abc@gmail.com",
  "password": "hashedPassword",
  "profilePicture": "https://example.com/profile.jpg",
  "createdAt": "2026-06-19T10:00:00Z"
}


## 2. Meeting Schema

The Meeting schema stores information about meetings created on the platform.

| Field        | Type            | Description                                |
| ------------ | --------------- | ------------------------------------------ |
| Meeting ID   | ObjectId        | Unique identifier of the meeting           |
| Host ID      | ObjectId        | Reference to the meeting creator           |
| Meeting Name | String          | Name/title of the meeting                  |
| Created At   | Date            | Meeting creation timestamp                 |
| Participants | Array<ObjectId> | List of users participating in the meeting |

### Example Meeting Document

json
{
  "_id": "meeting101",
  "hostId": "user123",
  "meetingName": "Weekly Team Meeting",
  "participants": ["user123", "user456", "user789"],
  "createdAt": "2026-06-19T11:00:00Z"
}


## 3. JWT Authentication in MERN

### What is JWT?

JWT (JSON Web Token) is a secure method used to authenticate users in MERN applications. After successful login, the server generates a token that is sent to the client. The client uses this token to access protected resources.


### Signup Flow

1. User enters name, email, and password.
2. Backend validates the data.
3. Password is hashed using bcrypt.
4. User information is stored in MongoDB.
5. Success response is returned.

Flow:

User → Signup Form → Backend Validation → Password Hashing → MongoDB → Success Response


### Login Flow

1. User enters email and password.
2. Backend searches for the user.
3. Password is compared using bcrypt.
4. If valid, JWT token is generated.
5. Token is sent to the client.

Flow:

User → Login Form → Verify Credentials → Generate JWT → Send Token


### Token Generation

After successful login, the server creates a JWT token containing user information.

Example Payload:

json
{
  "userId": "12345",
  "email": "user@example.com"
}


The token is signed using a secret key and returned to the frontend.


### Protected Routes

Protected routes can only be accessed by authenticated users.

Process:

1. Client sends JWT token in Authorization header.
2. Backend verifies the token.
3. If valid, access is granted.
4. If invalid or expired, access is denied.

Flow:

Client Request → JWT Verification → Access Granted / Access Denied

## Conclusion

The IntellMeet platform uses MongoDB for data storage and JWT-based authentication to provide secure user access. User and Meeting schemas are designed to support scalable meeting management and collaboration features.
