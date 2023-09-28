import { useState } from "react";

import { Form, Link, json, redirect, useSearchParams } from "react-router-dom";
import { getFromStorage, saveToStorage } from "../../util/local-storage";

const AuthForm = () => {
  // Lay du lieu searchParams
  const [searchParams] = useSearchParams();
  // Tra ve isLogin = true khi searhParams dang o mode login
  const isLogin = searchParams.get("mode") === "login";
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="authForm">
      <Form
        method="post"
        className="authFormContainer"
        onSubmit={() => {
          setEmail("");
          setPassword("");
          setFullname("");
          setPhone("");
        }}
      >
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
        {!isLogin && (
          <div className="authFormControl">
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              placeholder="Full Name"
            />
          </div>
        )}
        <div className="authFormControl">
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="authFormControl">
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </div>

        {!isLogin && (
          <div className="authFormControl">
            <input
              type="number"
              id="phone"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone"
            />
          </div>
        )}
        <div className="authFormActions">
          <button>{isLogin ? "Sign In" : "Create Account"}</button>
          <div className="authFormNote">
            <span>{isLogin ? "Create an account?" : "Login? "}</span>
            <Link
              to={`?mode=${isLogin ? "signup" : "login"}`}
              className="authFormToggle"
            >
              {isLogin ? "Sign up" : "Click"}
            </Link>
          </div>
        </div>
      </Form>
    </section>
  );
};
export default AuthForm;

// Action
export const action = async ({ request }) => {
  // Lay du lieu searchParams
  const searchParams = new URL(request.url).searchParams;
  // Check mode hien tai
  const mode = searchParams.get("mode") || "login";

  // Check mode hien tai co phai la login hoac signup
  if (mode !== "login" && mode !== "signup")
    throw json({ message: "Unsupported mode" });

  // Lay du lieu tu form
  const data = await request.formData();

  // format du lieu
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    fullname: data.get("fullname"),
    phone: data.get("phone"),
  };
  // Check 2 truong email va password co dang de trong hay khong
  if (!authData.email || !authData.password) {
    return window.alert("You must fill all the required fields");
  }
  // Neu chua ton tai userArr trong storage thi tao voi du lieu []
  !getFromStorage("userArr") && saveToStorage("userArr", []);

  //Lay du ieu users tu storage
  const users = getFromStorage("userArr");

  // Neu mode dang la signup
  if (mode === "signup") {
    // Ham validate du lieu
    const validate = () => {
      if (!authData.fullname || !authData.phone) {
        window.alert("You must fill all the required fields");
        return false;
      }
      if (users.find((user) => user.email === authData.email)) {
        window.alert("Email already in use");
        return false;
      }
      if (authData.password.length < 8) {
        window.alert("Password has must be at least 8 characters");
        return false;
      }

      return true;
    };
    // Neu du lieu valid
    if (validate()) {
      // Day authData vao users
      users.push(authData);
      // Luu mang users moi
      saveToStorage("userArr", users);
      // Thong bao cho nguoi dung
      window.alert("Sign Up Successfully!");
      // Quay ve trang login
      return redirect("/login?mode=login");
    }
    //Neu khong valid thi ve lai trang sign up
    else return redirect("/login?mode=signup");
  }

  // Neu mode la login
  if (mode === "login") {
    // Tim user co email trung voi email cua bat ki user nao trong mang
    const user = users.find((user) => user.email === authData.email);
    // Neu tim thay user va dung password
    if (user?.password === authData.password) {
      //Tạo currentUser và lưu vào localStorage thể hiện có User đang đăng nhập
      saveToStorage("currentUser", user);
      // Thông báo đăng nhập thành công
      window.alert("Login successful!");
      // Ve trang chu
      return redirect("/");
    }
    // Thong bao cho nguoi dung neu sai
    else {
      window.alert("Wrong username or password!");
      return redirect("/login?mode=login");
    }
  }
};
