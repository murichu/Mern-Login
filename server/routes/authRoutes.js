import express from 'express';
import { register, login, verifyOTP, logout, requestPasswordReset, confirmPasswordReset } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { otpRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);
router.post('/logout', authenticate, logout);
router.post('/request-password-reset', otpRateLimiter, requestPasswordReset);
router.post('/confirm-password-reset', confirmPasswordReset);

export default router;