import LoginLayout from "./(auth)/(LoginLayout)/layout"
import LoginPage from "./(auth)/(LoginLayout)/login/page"
export default function Home() {
  return (
    <LoginLayout>
      <LoginPage/>
    </LoginLayout>
  )
}
