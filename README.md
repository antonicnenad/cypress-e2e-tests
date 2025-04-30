This project is an end-to-end testing suite built with **Cypress** and **TypeScript**, designed to test two key application flows of the demo app available at [https://bookcart.azurewebsites.net/](https://bookcart.azurewebsites.net/).

The project follows Cypress best practices and includes:

- Full **Page Object Model (POM)**
- **Fixtures** for test data
- **Session caching** for login
- **Test cleanup** after execution
- Docker setup for isolated execution

> ⚠️ **Note:** The test suite expects that a user with the credentials from `cypress/fixtures/user.json` is **already registered** on the app [https://bookcart.azurewebsites.net](https://bookcart.azurewebsites.net). Registration is a manual prerequisite.

---

## 📁 Project Structure

```
CypressProject/
├── cypress/
│   ├── fixtures/         # JSON data for users and books
│   ├── pages/            # Page Object Model classes
│   ├── support/          # Cypress commands and config
├── apps/
│   ├── app1-e2e/         # Test cases for wishlist & checkout
│   ├── app2-swagger/     # Test case for Swagger login API
├── Dockerfile            # Docker setup for Cypress
├── .dockerignore         # Docker exclusions
├── .gitignore            # Git exclusions
├── package.json          # Project scripts & dependencies
├── tsconfig.json         # TypeScript config
└── README.md             # This file
```

---

## ✅ Test Case 1: Wishlist & Checkout Flow (app1)

**File:** `apps/app1-e2e/loginWishlistCart.cy.ts`

### Steps:

1. Login using valid user credentials via `cy.session()`
2. Add two specific books to wishlist:
   - _Harry Potter and the Chamber of Secrets_
   - _Harry Potter and the Prisoner of Azkaban_
3. Add first book from wishlist to cart
4. Remove the same book from wishlist
5. Verify badge counters (1 in wishlist, 1 in cart)
6. Go to cart and proceed to checkout
7. Fill checkout form and place order
8. Confirm success toasts and redirection to **My Orders** page
9. After test: **clear wishlist** to maintain clean state

---

## ✅ Test Case 2: Swagger Login API Check (app2)

**File:** `apps/app2-swagger/swaggerApiCheck.cy.ts`

### Steps:

1. Login via session
2. Click on the **Swagger** link in the side menu (target removed to open in same tab)
3. Assert that `/api/Login` endpoint is visible in Swagger UI

---

## 🧪 How to Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Open Cypress UI

```bash
npx cypress open
```

### 3. Run in headless mode (CLI)

```bash
npm run test:headless
```

### 4. Run only app1 tests

```bash
npm run test:app1
```

### 5. Run only app2 tests

```bash
npm run test:app2
```

---

## 🐳 Docker Setup

### 1. Build the image

```bash
docker build -t cypress-tests .
```

### 2. Run all tests inside container

```bash
docker run --rm cypress-tests
```

---

## 🔐 Test Data via Fixtures

### `cypress/fixtures/user.json`

```json
{
  "username": "cypress_user",
  "password": "Thisismypassw0rd"
}
```

### `cypress/fixtures/books.json`

```json
{
  "book1": "Harry Potter and the Chamber of Secrets",
  "book2": "Harry Potter and the Prisoner of Azkaban"
}
```

---

## 💡 Technologies Used

- Cypress 14.3.2
- TypeScript
- Docker
- Node.js 20+

---

## 📄 Additional Notes

- All selectors are encapsulated inside POMs with clear naming and comments
- Toast message validation includes fallback for elements that might not appear
- Tests are independent, isolated, and cleaned via `afterEach()`

---

## Author

**Nenad Antonic** – QA Automation Engineer

Feel free to clone, run and modify!
