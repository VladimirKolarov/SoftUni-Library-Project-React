import './Header.css'

export const Header = () => {
    return (
        <header className="App-header">
            <div className="Header-container">
                <ul>
                    <li>All Books</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Logout</li>
                    <li>My Books</li>
                </ul>
            </div>
        </header>
    )
}