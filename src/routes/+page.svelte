<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skinny Therapy</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Skinny Therapy</h1>
            <p>Personalized skincare routines and product recommendations</p>
        </header>

        <main>
            <section class="hero">
                <h2>Discover Your Perfect Skincare Routine</h2>
                <p>Answer a few simple questions to get personalized recommendations</p>
                <button on:click={() => navigate('/survey')}>Start Survey</button>
            </section>

            <section class="features">
                <h2>Why Choose Skinny Therapy?</h2>
                <div class="feature-grid">
                    <div class="feature">
                        <h3>Personalized</h3>
                        <p>Get routines tailored to your unique skin type and concerns</p>
                    </div>
                    <div class="feature">
                        <h3>Expert Recommendations</h3>
                        <p>Based on dermatologist-approved products</p>
                    </div>
                    <div class="feature">
                        <h3>Easy to Follow</h3>
                        <p>Simple, step-by-step routines for all skin types</p>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2023 Skinny Therapy. All rights reserved.</p>
        </footer>
    </div>

    <style>
        :global(body) {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }

        .app-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            text-align: center;
            padding: 2rem 0;
            background-color: #6200ee;
            color: white;
            margin-bottom: 2rem;
        }

        header h1 {
            margin: 0;
            font-size: 2.5rem;
        }

        header p {
            margin: 0.5rem 0 0;
            font-size: 1.2rem;
        }

        main {
            padding: 2rem 0;
        }

        .hero {
            text-align: center;
            padding: 3rem 0;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
        }

        .hero h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .hero button {
            background-color: #6200ee;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .hero button:hover {
            background-color: #3700b3;
        }

        .features {
            text-align: center;
        }

        .features h2 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #6200ee;
        }

        footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
            border-top: 1px solid #e0e0e0;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }

            .hero h2 {
                font-size: 1.8rem;
            }

            .hero p {
                font-size: 1rem;
            }
        }
    </style>

    <script>
        import { navigate } from '$app/navigation';
    </script>
</body>
</html>