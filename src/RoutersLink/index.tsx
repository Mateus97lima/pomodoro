import { Link } from "react-router";

type RoutersLinkProps = {
    children:React.ReactNode;
    href: string,
}& React.ComponentProps<'a'>;


export function RoutersLink ({
children,
 href ,
 ...props 
}:RoutersLinkProps) {
    return(
        <Link to={href} {...props}>{children}</Link>
    )

}