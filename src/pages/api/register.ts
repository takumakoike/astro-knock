export const prerender = false;


import type { APIRoute } from "astro";

export const POST: APIRoute = async( { request }) => {
    const data = await request.formData();
    const name = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    if(!name || !email || !password){
        return new Response(
            JSON.stringify({
                message: "フィールドが正しくありません",
            }),
            { status: 400}
        );
    }
    return new Response(
        JSON.stringify({
            message: "データの取得に成功しました"
        }),
        { status: 200 }
    )
}