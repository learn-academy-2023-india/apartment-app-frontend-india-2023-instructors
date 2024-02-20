import { render, screen } from "@testing-library/react";
import ApartmentProtectedIndex from "../pages/ApartmentProtectedIndex";
import { BrowserRouter } from "react-router-dom";

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com"
    }

    const userApartments = [
      {
        id: 1,
        street: "101 Rimrock",
        unit: "9A",
        city: "San Diego",
        state: "CA",
        square_footage: 500,
        price: "1800",
        bedrooms: 2,
        bathrooms: 2.0,
        pets: "yes!",
        image:
          "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
        user_id: 1
      }
    ]

    render(
      <BrowserRouter>
        <ApartmentProtectedIndex 
          apartments={userApartments}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Apartments")
    expect(element).toBeInTheDocument()
  })
})