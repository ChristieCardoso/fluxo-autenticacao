"use client";

import { Form, Formik } from 'formik'
import React from 'react'

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik>{({ values }) => <Form noValidate>Teste</Form>}</Formik>
      </main>
  )
}
