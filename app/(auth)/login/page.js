import LoginForm from "../_components/login-form";

export default async function LoginPage() {

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348949/Prestataires_Documents/smj7n1bdlpjsfsotwpco.png"
      />
      <div
        className="bg-cover bg-gradient-to-br from-[#7337FF] via-[#000000] to-[#0C7EA8]"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348950/Prestataires_Documents/fopt5esl9cgvlcawz1z4.jpg)",
        }}
      >
        <div className="h-screen flex justify-center items-center backdrop-brightness-50">
          <div className="flex flex-col items-center space-y-8">
            <div>
              <img
                src="https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348949/Prestataires_Documents/smj7n1bdlpjsfsotwpco.png"
                alt="TyBot Logo"
                className="cursor-pointer"
              />
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
