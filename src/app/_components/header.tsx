import  Image  from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card className="p-5 flex flex-row items-center justify-between">
            <CardContent>
               <Image alt="logo barbearia" src="/logo.png" height={18} width={120} />
            </CardContent>
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
        </Card>
    );
}
 
export default Header;