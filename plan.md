# Show Products

- X Model
- X Migration
- X Seeding
- X Backend Route GET products
- X Route for a product page in the frontend
- X Component
- X Fetch data in the frontend
- X Dispatch an action put the data in Redux
- X Display some products

# Strategy 1 (Go with the flow)

FE

- X Make form
- X Get data from user
- X Post to backend

BE

- X Make route "endpoint" in the backend
- X Create a product with data from the user
- X Send a response

FE

- Update the frontend (redux, dispatch action etc.)

Frontend -> Backend -> Frontend

# Strategy 2 (Backend first)

- Backend route
- Post to the backend using httpie
- Create a product with the data you post using httpie
- Send a response

- Make a form
- Post to the backend (you already know it works)
- Get response
- Update the frontend
