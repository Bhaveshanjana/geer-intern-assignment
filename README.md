## Project Overview
This is my submission for the given assignment. I’ve built a **fully responsive Product Listing Website** using **Next.js (with TypeScript)** and a simple **JSON-based backend API** for managing product data. The UI and backend are developed as per the task requirements, with added features like product search and filter.

###  Task 1 – Frontend (Next.js)

- Built using **Next.js** with the **App Router**.
- Page `/products` displays a list of products with:
  - Product Image
  - Product Name
  - Product Price
- **Responsive layout** for both desktop and mobile views.
- Fetches product data from the backend API.
- **Bonus Features:**
  - Product **search** functionality (by name).
  - Product **filter** and **shortlisting**.
  - Individual Product Detail Page: `/products/[id]`
  - Product **Edit** and **Delete** options.

---

###  Task 2 – Backend (API with JSON File Storage)

- API created using **Next.js API routes**.
- Product data is managed using a **local JSON file** (as per instructions).
- API Endpoints:
  - `GET /api/products` – Get all products
  - `POST /api/products` – Add a new product (name, price, imageUrl)
  - `DELETE /api/products/:id` – Delete product by ID
  - *(Extended)*: `PUT /api/products/:id` – Edit existing product

---

### Learning Note

I'm currently learning **Next.js** and **TypeScript**, and this project helped me understand full-stack integration, API routes. I tried my best to complete the assignment with the requested features and a clean, user-friendly interface.

### Feedback
I’m open to suggestions and improvements!
Thank you for reviewing my assignment.

### To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhaveshanjana/geer-intern-assignment.git

2. **Install dependencies**:
    ```bash
   npm install

3. **Start the development server**:
    ```bash
   npm run dev

4. **or download repo as zip file from github**:
   ```bash
   cd your *folder* where you extract the zip
   cd folder
   npm i
   and then npm run dev