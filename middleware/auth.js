import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const authenticate = async ({ request, locals }) => {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    locals.user = decoded;
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const authorize = (roles = []) => {
  return async ({ locals }) => {
    if (!locals.user || !roles.includes(locals.user.role)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };
};