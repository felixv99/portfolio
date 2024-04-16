import styles from '@/styles/Home.module.css'

const convertToNextClassName = (className) => className.split(' ').map(c => styles[c]).join(' ')


export default function IdeatsTos() {
  return (
    <section id="tos" style={{margin: "10px", marginTop: "100px"}}>
      <div style={{paddingBottom: "200px"}}>
        <h1>Terms of Service of Ideats</h1>
        <p><strong>Effective Date:</strong> 16.04.2024</p>

        <h2>Welcome to Ideats!</h2>
        <p>These Terms of Service &#40;&#34;Terms&#34;&#41; govern your access to and use of the Ideats application &#40;&#34;Application&#34;&#41;, which allows you to combine images, video, and music into ready-made formats that dynamically change based on the beats per minute &#40;BPM&#41; of the music.</p>
        <p>By accessing or using our Application, you agree to be bound by these Terms and our <a href="https://felixvirtanen.com/ideats/privacy-policy"> Privacy Policy</a>. If you do not agree to these Terms, do not use our Application.</p>

        <h3>1. Using Ideats</h3>
        <ul>
          <li><strong>Eligibility:</strong> You must be at least 13 years old to use the Application. If you are between 13 and 18 years old, you must have parental or guardian permission.</li>
          <li><strong>License to Use:</strong> We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Application pursuant to these Terms.</li>
          <li><strong>Prohibited Activities:</strong> You may not use the Application to upload any content that infringes on the intellectual property rights of others, is illegal, offensive, or promotes harmful activities.</li>
        </ul>

        <h3>2. Content</h3>
        <ul>
          <li><strong>User Content:</strong> You retain all rights to the images, videos, and music you upload to the Application and the output created using the Application. You grant Ideats a non-exclusive license to use this content for operating and improving the Application.</li>
          <li><strong>Responsibility for Content:</strong> You are solely responsible for the content you create using the Application and the consequences of posting or publishing it.</li>
        </ul>

        <h3>3. Intellectual Property</h3>
        <p>All rights, title, and interest in and to the Application and its original content, features, and functionality are and will remain the exclusive property of Ideats and its licensors.</p>

        <h3>4. Account Termination</h3>
        <ul>
          <li><strong>Termination by You:</strong> You may stop using the Application at any time. To delete your account, please contact our support team.</li>
          <li><strong>Termination by Us:</strong> We may terminate or suspend your access to the Application without prior notice or liability, for any reason, including but not limited to a breach of these Terms.</li>
        </ul>

        <h3>5. Disclaimers and Limitations of Liability</h3>
        <ul>
          <li><strong>As Is:</strong> The Application is provided on an &#34;AS IS&#34; and &#34;AS AVAILABLE&#34; basis. Ideats does not guarantee that the Application will function without interruption or errors.</li>
          <li><strong>Limitation of Liability:</strong> In no event will Ideats be liable for any indirect, incidental, special, consequential or punitive damages resulting from the use of or inability to use the Application.</li>
        </ul>

        <h3>6. Changes to Terms</h3>
        <p>We may update our Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the &#34;Effective Date&#34; at the top of these Terms.</p>

        <h3>7. Governing Law</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of Finland, without regard to its conflict of law provisions.</p>

        <h3>8. Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us at ideats-nature@gmail.com.</p>

      </div>
    </section>
  )
}