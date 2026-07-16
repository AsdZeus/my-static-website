const { app } = require('@azure/functions');

app.http('contact', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',

    handler: async (request, context) => {

        // Handle CORS preflight request
        if (request.method === 'OPTIONS') {
            return {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            };
        }

        const body = await request.json();

        const name = body.name;
        const email = body.email;
        const message = body.message;

        context.log("New Contact Form");

        context.log(name);
        context.log(email);
        context.log(message);

        return {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            jsonBody: {
                success: true,
                message: `Thank you ${name}! Your message has been received.`
            }
        };
    }
});