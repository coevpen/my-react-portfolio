function Nav(props){
    const{
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <nav>
            <ul class="nav justify-content-end">
                <li onClick={ () => setContactSelected(false)}>
                    <div class="nav-item">
                        <span class="nav-link">About Me</span>
                    </div>
                </li>
                <li>
                    <div class="nav-item">
                        <span class="nav-link">Portfolio</span>
                    </div>
                </li>
                <li class="nav-link" className={` ${contactSelected && 'navActive'}`}>
                    <div class="nav-item">
                        <span class="nav-link">Contact Me</span>
                    </div>
                </li>
                <li>
                    <div class="nav-item">
                        <span class="nav-link">Resume</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;