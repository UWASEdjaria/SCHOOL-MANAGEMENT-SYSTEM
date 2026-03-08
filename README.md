# School Management System - CLIENT APP

**Parent/Student Application** - This is the client-facing app for parents and students.

> **Note:** The Admin/Staff application is in a separate repository.

## Structure
```
/frontend  - Next.js (Parent/Student UI)
/backend   - Express.js (API)
```

## Setup

### Backend
```bash
cd backend
npm install
copy .env.example .env
# Edit .env with your MongoDB URI
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features
- ✅ Parent/Student registration & login
- ✅ SHA-512 password hashing
- ✅ JWT authentication
- ✅ Device verification (admin approval required)
- ✅ Fee payment & balance tracking
- ✅ View grades & attendance
- ✅ Transaction history

## API Endpoints

### Auth
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login

### Fees
- POST `/api/fees/deposit` - Make payment
- POST `/api/fees/withdraw` - Request refund
- GET `/api/fees/balance` - Get balance
- GET `/api/fees/transactions` - Get history

### Academic
- GET `/api/academic/grades` - Get grades
- GET `/api/academic/attendance` - Get attendance
