import Container from "./container"


export default function Navbar() {
    return <div>
        <div className=" p-4">
            <Container>
                <div className="flex flex-row space-x-10 justify-end">
                    <MenuItem text="Home" link="/" />
                    <MenuItem text="Tiny Apps" link="https://tinyappshq.net" />
                    <MenuItem text="Github" link="https://github.com/cdcharlebois" />
                </div>

            </Container>

        </div>
    </div>
}

interface MenuItemProps {
    text: string,
    link: string
}
const MenuItem = (props: MenuItemProps) => {
    return <div>
        <a href={props.link} className="hover:underline">
            {props.text}
        </a>
    </div>
}