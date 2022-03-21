function Nav(props){
    const{
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <nav>
            <ul class="nav">
                <li onClick={ () => setContactSelected(false)}>
                    <span>About Me</span>
                </li>
                <li>
                    <span>Portfolio</span>
                </li>
                <li className={` ${contactSelected && 'navActive'}`}>
                    <span>Contact Me</span>
                </li>
                <li>
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;