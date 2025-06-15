import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          address: string
          status: 'active' | 'inactive'
          total_repairs: number
          total_spent: number
          last_service_date: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          address: string
          status?: 'active' | 'inactive'
          total_repairs?: number
          total_spent?: number
          last_service_date?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          address?: string
          status?: 'active' | 'inactive'
          total_repairs?: number
          total_spent?: number
          last_service_date?: string | null
        }
      }
      repairs: {
        Row: {
          id: string
          created_at: string
          customer_id: string
          device_type: string
          issue_description: string
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          cost: number
          estimated_completion: string | null
          actual_completion: string | null
          technician_notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          customer_id: string
          device_type: string
          issue_description: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          cost: number
          estimated_completion?: string | null
          actual_completion?: string | null
          technician_notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          customer_id?: string
          device_type?: string
          issue_description?: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          cost?: number
          estimated_completion?: string | null
          actual_completion?: string | null
          technician_notes?: string | null
        }
      }
    }
  }
}