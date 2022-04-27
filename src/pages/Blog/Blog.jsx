import React from "react";

const Blog = () => {
  return (
    <div className="container" style={{ color: "#50a0db" }}>
      <div>
        <h1>Differenes between Authentication and Authorization</h1>
        <p>
          In word similarity authentication and authorization might seems
          similar but technically they are not.
          <br />
          So, there might a question arise in your mind "What are their
          differences?"
          <br />
          So, in a glance <b>Authentication</b> is the process to verify anyone
          or anything who or what it is. For example, in a web application there
          might be a lot of users. Besides some bad guy trying to increase the
          traffic of the application using bots. However, there some
          technologies that verify users whether they are human or not. That is{" "}
          <i>Authentication.</i>
          <br />
          If we go for other example, then it comes about who is the user,
          his/her identity and so on.
          <br />
          Authentication works through passwords, one time passwords(OTP) or
          biometric information and other information provided or input by the
          users.
          <br />
          Authentication is changeable by the users.
        </p>
        <p>
          In the other hand, Authorization is the process who/what can access
          how much data on a system.
          <br />
          Authorization is implemented and maintained by organization.
          <br />
          Authorization comes after authentication.
          <br />
          Authorization can not be changed by users but the organization itself.
          <br />
          For example in real life, An admin can access the all kind of
          information or data on their system or application where a user does
          not have that much of access but himself/herself.
        </p>
      </div>

      <div>
        <h1>
          Why are we using firebase? What other options do we have to implement
          authentication?
        </h1>
        <p>
          Well, we are using firebase for authentication for the users. Firebase
          is an authentication system developed by <b>Google.</b>
          <br />
          There are a lot of options to implement authentication in an
          application. Here are bunch of lists.
        </p>
        <ul>
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
          <li>Amazon Cognito</li>
          <li>OAuth2 and so on.</li>
        </ul>
      </div>
      <div>
        <h1>
          What other services does firebase provide other than authentication?
        </h1>
        <p>
          Firebase provides not only authentication but also other services and
          they are:
          <br />
          <ul>
            <li>Firestore Database</li>
            <li>Realtime Database</li>
            <li>Storage</li>
            <li>Hosting</li>
            <li>Machine Learning etc.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
