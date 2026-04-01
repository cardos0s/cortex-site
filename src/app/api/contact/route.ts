import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos sao obrigatorios" },
        { status: 400 }
      );
    }

    // Send to Formspree
    const FORMSPREE_ID = process.env.FORMSPREE_ID || "YOUR_FORMSPREE_ID";

    const formspreeRes = await fetch(
      `https://formspree.io/f/${FORMSPREE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `[CORTEX] Novo contato de ${name}`,
        }),
      }
    );

    if (!formspreeRes.ok) {
      const errorData = await formspreeRes.json();
      console.error("Formspree error:", errorData);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
