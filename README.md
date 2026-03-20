# Skinny Therapy

Skinny Therapy is a mobile-responsive web application that provides personalized skincare routines and product recommendations based on users' skin type and concerns.

## Features

- Personalized skincare routines
- Product recommendations
- User authentication
- User profile management

## Tech Stack

- **Frontend**: SvelteKit, Svelte Material UI
- **Backend**: Express (Node.js 18)
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js 18
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/skinny-therapy.git
```

2. Navigate to the project directory:

```bash
cd skinny-therapy
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following environment variables:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

```
skinny-therapy/
├── src/
│   ├── lib/
│   │   ├── server/
│   │   │   ├── models/
│   │   │   │   ├── User.js
│   │   │   │   ├── SkinType.js
│   │   │   │   ├── SkinConcern.js
│   │   │   │   ├── Product.js
│   │   │   │   └── Routine.js
│   │   │   ├── routes/
│   │   │   │   ├── auth.js
│   │   │   │   ├── users.js
│   │   │   │   ├── skinTypes.js
│   │   │   │   ├── skinConcerns.js
│   │   │   │   ├── products.js
│   │   │   │   └── routines.js
│   │   │   └── app.js
│   │   └── client/
│   │       ├── stores/
│   │       │   ├── auth.js
│   │       │   ├── user.js
│   │       │   ├── skinTypes.js
│   │       │   ├── skinConcerns.js
│   │       │   ├── products.js
│   │       │   └── routines.js
│   │       └── utils/
│   │           ├── api.js
│   │           └── auth.js
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── +page.svelte
│   │   │   └── register/
│   │   │       └── +page.svelte
│   │   ├── profile/
│   │   │   └── +page.svelte
│   │   ├── routines/
│   │   │   └── +page.svelte
│   │   └── products/
│   │       └── +page.svelte
│   └── app.html
├── static/
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.