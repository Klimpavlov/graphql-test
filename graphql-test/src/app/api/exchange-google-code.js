export default async function handler(req, res) {
    const { code, state } = req.body;

    try {
        // Обмен `code` на токен доступа
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: 'https://http://localhost:3000/api/auth/completeGoogleSignIn',
                grant_type: 'authorization_code',
            }),
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error exchanging code:', error);
        res.status(500).json({ error: 'Failed to exchange code' });
    }
}
