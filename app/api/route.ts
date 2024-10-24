import { NextResponse } from "next/server";


export async function POST(request:Request) {
    try {
        const body = await request.json(); // Using req.body instead of req.json()
        console.log(body);

        // You can add logic to process the body here
        
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