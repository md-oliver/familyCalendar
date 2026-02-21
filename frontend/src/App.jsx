import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CalenderList from "./components/CalenderList";

import Modal from "./components/Modal";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Form submitted");
};

function App() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Header />
            {openModal && (
                <Modal
                    title="Login"
                    onClick={() => setOpenModal((prev) => !prev)}>
                    <form
                        className="form-login"
                        onSubmit={(e) => formSubmitHandler(e)}>
                        <div className="form-control">
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" name="username" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Pasword:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="form-control-btn">
                            <button type="submit" className="form-submit-btn">
                                Login
                            </button>
                            <button
                                onClick={() => setOpenModal((prev) => !prev)}
                                type="button"
                                className="form-cancel-btn">
                                Cancel
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
            <main>
                <QueryClientProvider client={queryClient}>
                    <CalenderList />
                </QueryClientProvider>
            </main>
            <Footer onClick={() => setOpenModal((prev) => !prev)} />
        </>
    );
}

export default App;
