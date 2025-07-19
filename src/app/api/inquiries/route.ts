import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Simple in-memory storage for demo (use a database in production)
let inquiries: any[] = [];
let currentId = 1;

const insertInquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertInquirySchema.parse(body);
    
    const inquiry = {
      ...validatedData,
      id: currentId++,
      createdAt: new Date().toISOString(),
    };
    
    inquiries.push(inquiry);
    
    return NextResponse.json({ 
      message: "Inquiry submitted successfully",
      id: inquiry.id 
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        message: "Invalid inquiry data",
        errors: error.errors 
      }, { status: 400 });
    }
    console.error("Inquiry creation error:", error);
    return NextResponse.json({ 
      message: "Failed to submit inquiry",
      error: "Internal server error"
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(inquiries.reverse());
  } catch (error) {
    console.error("Get inquiries error:", error);
    return NextResponse.json({ 
      message: "Failed to fetch inquiries",
      error: "Internal server error"
    }, { status: 500 });
  }
}