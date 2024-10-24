import Connect from "@/Database/Connections/localConnect";
import { Shrinkrs } from "@/Database/Models/shrinkrs";
import { NextResponse } from "next/server";


export async function POST(request:Request) {
    await Connect()
    try {
        const body = await request.json(); // Using req.body instead of req.json()
        console.log(body);

        // You can add logic to process the body here
        const Shrinkr = await Shrinkrs.create(body)
        if (!Shrinkr) {
            return NextResponse.json(
                { msg: "There Seems to be an error Shortening Your URL. Pls Try Again Later" },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { msg: "Data Recived",body },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { msg: "Internal Server Error", },
            { status: 500 }
        );
    }
}