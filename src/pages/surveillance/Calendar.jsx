import Header from "./components/Header"
import { Button } from "@/components/ui/Button"
import { MailIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu"

const Calendar = () => {
    return (
<<<<<<< HEAD
        <div className="lg:pl-4 lg:pt-4">
            <Header title="Calendrier">Voici votre calendrier. Si vous souhaitez envoyer une réclamation, saisissez-la ci-dessous et envoyez-la.</Header>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        <MailIcon className="mr-2 h-4 w-4" /> Open drop down
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
=======
        <div className="lg:pt-4 lg:pl-4">
            <Header title="Calendrier">
                Voici votre calendrier. Si vous souhaitez envoyer une réclamation, saisissez-la
                ci-dessous et envoyez-la.
            </Header>
>>>>>>> cc4cec45d9abb6102f25515425acc111f472211b
        </div>
    )
}

export default Calendar
