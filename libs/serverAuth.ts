import {NextApiRequest} from "next";
import {getSession} from "next-auth/react";
import Error from "next/error";
import prisma from '../libs/prismadb'

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({req})

    if(!session?.user?.email) {
        //@ts-ignore
        throw new Error('Not signed in')
    }
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })
    if(!currentUser) {
        //@ts-ignore
        throw new Error('Not signed in')
    }
    return { currentUser }
}

export default serverAuth