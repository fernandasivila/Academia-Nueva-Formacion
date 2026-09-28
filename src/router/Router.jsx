import { Route, Routes } from "react-router-dom"
import { CourseListContainer } from "../components/Courses/CourseListContainer/CourseListContainer"
import { CourseDetailContainer } from "../components/Courses/CourseDetailContainer/CourseDetailContainer"
import { InscriptionsCart } from "../components/InscriptionsCart/InscriptionsCart"
import { CheckoutInscriptionForm } from "../components/CheckoutInscription/CheckoutInscriptionForm"

export const Router = () => {
  return (
    <Routes>
          <Route path="/" element={<CourseListContainer/>} />
          <Route path="/category/:categoryId" element={<CourseListContainer />} />

          <Route path="/item/:itemId" element={<CourseDetailContainer />} />

          <Route path="/cart" element={<InscriptionsCart />} />

          <Route path="/checkout" element={<CheckoutInscriptionForm />} />
          <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
    </Routes>

  )
}
