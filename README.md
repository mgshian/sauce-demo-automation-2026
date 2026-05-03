# Playwright Automation Framework (SauceDemo)

This project is an end-to-end test automation framework built using **Playwright** and **JavaScript**, following the **Page Object Model (POM)** design pattern.

It automates core user flows of the SauceDemo application, including login, cart operations, and checkout.

---

##  Features

* Page Object Model (POM) structure
* Data-driven testing using JSON
* Environment variable support with `.env`
* Modular and scalable test design
* Uses beforeEach hooks for reusable login steps in tests
* Covers key user workflows:

  * Login
  * Add/Remove items from cart
  * Checkout process

---

## Project Structure

```
project-root/
│
├── pages/                # Page Object classes
│   ├── LoginPage.js
│   ├── ProductPage.js
│   └── CheckoutPage.js
│
├── tests/                # Test files
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── test-data/            # Test data (JSON)
│   └── checkoutData.json
│
├── utils/                # Utilities and config
│   └── config.js
│
├── .env                  # Environment variables
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mgshian/sauce-demo-automation-2026.git
cd sauce-demo-automation-2026
```

### 2. Install dependencies

```
npm install
```

### 3. Install Playwright browsers

```
npx playwright install
```

### 4. Create `.env` file

```
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com/
```

---

## Running Tests

### Run all tests

```
npx playwright test
```

### Run tests in headed mode

```
npx playwright test --headed
```

### View HTML report

```
npx playwright show-report
```

---

## Test Scenarios

### Login Tests

* User can login with valid credentials

### Cart Tests (login before each test)

* Add item to cart
* Remove item from cart

### Checkout Tests (login before each test)

* Successful checkout with valid data
* Error handling when required fields are missing

---

## Tech Stack

* **Playwright**
* **JavaScript (Node.js)**
* **dotenv**

---

##  Future Improvements

* Add negative login test cases
* Expand use of beforeEach for other common steps
* Integrate CI/CD (GitHub Actions)
* Add screenshots and videos on failure
* Expand test coverage (multiple items, edge cases)

---

##  Author

Sherrie Ann


---

## License

This project is for learning and portfolio purposes.
