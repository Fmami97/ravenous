import "./HeaderComponent.css";
export function HeaderComponent({ title = "Ravenous" }) {
    return (<header>
        {title}
    </header>)
}