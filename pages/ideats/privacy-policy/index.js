import styles from '@/styles/Home.module.css'

const convertToNextClassName = (className) => className.split(' ').map(c => styles[c]).join(' ')


export default function IdeatsPP() {
  return (
    <section id="tos" style={{ margin: "10px", marginTop: "100px" }}>
      <div style={{ paddingBottom: "200px" }}>
        <h1>Privacy Policy of Ideats</h1>
        <p><strong>Effective Date:</strong> 16.04.2024</p>

        <p>Welcome to the Privacy Policy of Ideats &#40;&#34;we&#34;, &#34;us&#34;, &#34;our&#34;&#41;. Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect information in relation to our Ideats application &#40;&#34;Application&#34;&#41;, and your choices about the collection and use of your information.</p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li><strong>Information You Provide:</strong> This includes account registration details like your username and email address, and any content you create using the Application, such as images, videos, and music files.</li>
          <li><strong>Usage Information:</strong> We collect information about your interactions with the Application such as the types of content you view or engage with and the frequency and duration of your activities.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide and improve the Application, including to facilitate the creation of content that dynamically changes based on the BPM of the music.</li>
          <li>To understand and analyze the usage trends and preferences of our users to make our Application better, faster, and safer.</li>
          <li>To communicate with you, including sending you updates, information, and offers related to our services, or responding to your comments and questions.</li>
        </ul>

        <h3>3. Sharing of Your Information</h3>
        <p>We will not rent or sell your information to third parties outside Ideats without your consent, except as noted in this Policy:</p>
        <ul>
          <li><strong>Parties with whom we may share your information:</strong> We may share information with businesses that are legally part of the same group of companies that we are, or that become part of that group &#40;&#34;Affiliates&#34;&#41;.</li>
          <li><strong>Parties with whom you may choose to share your User Content:</strong> Any information or content that you voluntarily disclose for posting to the Application, such as User Content, becomes available to the public.</li>
        </ul>

        <h3>4. Your Choices About Your Information</h3>
        <p>You have several choices regarding the use of information on our Application:</p>
        <ul>
          <li><strong>Account Information and Settings:</strong> You may update your account information and modify content that you have posted.</li>
          <li><strong>Tracking Technologies and Advertising:</strong> You can control tracking tools from your mobile device settings to reject cookies or notifications.</li>
        </ul>

        <h3>5. Security</h3>
        <p>We use commercially reasonable safeguards to help keep the information collected through the Application secure. However, Ideats cannot ensure the security of any information you transmit to Ideats or guarantee that information on the Application may not be accessed, disclosed, altered, or destroyed.</p>

        <h3>6. Changes to Our Privacy Policy</h3>
        <p>We may modify this Privacy Policy from time to time. The most current version of this policy will govern our use of your information and will always be at felixvirtanen.com/ideats/privacy-policy .</p>

        <h3>7. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy or the Application, please contact us at ideats-nature@gmail.com.</p>

      </div>
    </section>
  )
}