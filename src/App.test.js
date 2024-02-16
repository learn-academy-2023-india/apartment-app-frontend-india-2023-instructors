import { render, screen, waitFor } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter } from 'react-router-dom';


describe("<App />", () => {
  it("renders an nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
  })

  it('renders Home component when "/" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const image = screen.getByText("Welcome!")
    expect(image).toBeInTheDocument();
  });

  it('renders Index component when "/apartmentindex" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentindex']}>
        <App />
      </MemoryRouter>
    );
    const index = screen.getByText("Recent Listings")
    expect(index).toBeInTheDocument();
  });

  it('renders Show component when "/apartmentshow" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentshow/1']}>
        <App />
      </MemoryRouter>
    );
    const show = screen.getByText("101 Rimrock, San Diego, CA")
    expect(show).toBeInTheDocument();
  });

  it('renders New component when "/apartmentnew" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentnew']}>
        <App />
      </MemoryRouter>
    );
    const apartmentNew = screen.getByText("New Listing")
    expect(apartmentNew).toBeInTheDocument();
  });

  it('renders Edit component when "/apartmentedit" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/apartmentedit/1']}>
        <App />
      </MemoryRouter>
    );
    const apartmentEdit = screen.getByText("Update Listing")
    expect(apartmentEdit).toBeInTheDocument();
  });

  it('renders NotFound component when any other route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/imnotreal']}>
        <App />
      </MemoryRouter>
    );
    const my404 = screen.getByText("Oops, could not find that place")
    expect(my404).toBeInTheDocument()
  })

  

})




