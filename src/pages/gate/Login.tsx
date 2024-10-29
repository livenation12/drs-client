import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import DasmoIcon from "@/assets/dasmo-icon.png";
import { useLoginMutation } from "@/services/authApi";
import { useState } from "react";
import type { Login } from "@/models/user.model";
import { useLazyGetCSRFProtectionQuery } from "@/services/csrfApi";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<Login>({
    email: '',
    password: ''
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const [trigger] = useLazyGetCSRFProtectionQuery();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      trigger();
      // Now attempt login
      await login(loginData).unwrap();
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
  
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <main className="min-h-screen min-w-max w-screen flex justify-center items-center">
      <section className="grid lg:grid-cols-2 w-4/5 border rounded-md">
        <div className="lg:flex justify-center hidden border-r">
          <img src={DasmoIcon} alt="DASMO Icon" width={480} />
        </div>
        <div className="flex justify-center items-center">
          <Card className="w-4/5 border-0">
            <CardHeader>
              <CardTitle className="text-3xl">DASMO Routing System</CardTitle>
              <CardDescription>Fill in with your credentials to proceed</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  className="h-10"
                  name="email"
                  onChange={handleChange}
                  value={loginData.email}
                  placeholder="Email"
                />
                <Input
                  className="h-10"
                  name="password"
                  onChange={handleChange}
                  value={loginData.password}
                  type="password"
                  placeholder="Password"
                />
                <Button isLoading={isLoading} className="font-semibold" type='submit'>
                  Login
                </Button>
                {error && <p className="text-red-500">Login failed. Please try again.</p>}
                <Link to={'/forgot-password'} className="text-end text-sm">Forgot password</Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
