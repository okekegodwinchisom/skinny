import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { getPersonalizedRoutine, getProductRecommendations } from '../controllers/skinCareController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// User profile routes
router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUserProfile);

// Skin care routes
router.get('/routine', authenticateToken, getPersonalizedRoutine);
router.get('/recommendations', authenticateToken, getProductRecommendations);

export default router;