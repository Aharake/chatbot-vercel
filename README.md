
# Shopify Chatbot App Integration

## Features:
- Embedded chatbot UI for storefront
- Backend chatbot logic using OpenAI
- Shopify Admin API integration for product data

## Setup
1. Add `chatbot.js` route to your existing Shopify app backend (Express)
2. Serve `chatbot.html` and inject into storefront via ScriptTag API or Theme Extension
3. Set environment variables in `.env` or app config:
    - `OPENAI_API_KEY`
    - `SHOPIFY_SHOP_DOMAIN` (e.g. mystore.myshopify.com)
    - `SHOPIFY_ADMIN_API_TOKEN`
