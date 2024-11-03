import { Component } from 'vue'

export interface BaseButtonProps {
  as?: string | Component
  asChild?: boolean
  label: string
}
