"use client";

const highlights = [
  "رسالة ترحيبية مبهجة تدعم اللغة العربية كلياً.",
  "تجربة بسيطة وسريعة للعمل على أي جهاز.",
  "واجهة لطيفة قابلة للنشر مباشرة على Vercel."
];

export default function Home() {
  return (
    <main className="wrapper">
      <section className="hero">
        <span className="badge">سلام</span>
        <h1>أهلاً وسهلاً بكم في ركننا الرقمي</h1>
        <p>
          صُممت هذه الصفحة الصغيرة لتكون مساحة ترحيب دافئة، تستعرض جمال اللغة
          العربية وتُبرز إمكانية بناء تجارب ويب راقية بخطوات سريعة.
        </p>
        <div className="cta">
          <a className="primary" href="#about">
            اكتشف المزيد
          </a>
          <a className="ghost" href="https://nextjs.org" target="_blank">
            تعرّف على Next.js
          </a>
        </div>
        <ul className="features">
          {highlights.map((item) => (
            <li key={item}>
              <span>•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="about">
        <h2>لماذا هذه الصفحة؟</h2>
        <p>
          الهدف منها هو تقديم مثال عملي سريع لموقع يمكن نشره فوراً على Vercel،
          مع احترام اتجاه الكتابة من اليمين إلى اليسار وتعزيز وضوح الرسالة
          الترحيبية. يمكنك استخدام هذا القالب كنقطة بداية لأي فكرة ترغب بمشاركتها
          مع العالم.
        </p>
      </section>

      <section className="section tips">
        <h3>كيف تستفيد منها؟</h3>
        <ol>
          <li>عدّل النصوص لتناسب مشروعك أو مبادرتك الشخصية.</li>
          <li>أضف أقساماً جديدة كشبكة خدمات أو نموذج تواصل.</li>
          <li>ادمجها ضمن تطبيق أكبر، فهي مبنية وفق أحدث قدرات Next.js.</li>
        </ol>
      </section>

      <footer>
        <small>صُنعت بمحبة باستخدام Next.js و React.</small>
      </footer>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 64px;
          padding: 96px 24px 64px;
          max-width: 880px;
          margin: 0 auto;
        }

        .hero {
          background: rgba(255, 255, 255, 0.85);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 0 24px 68px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(12px);
        }

        .badge {
          display: inline-block;
          font-weight: 600;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 16px;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(32px, 5vw, 48px);
          margin: 0 0 20px;
          line-height: 1.2;
        }

        p {
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .cta {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          margin: 32px 0 24px;
        }

        .primary,
        .ghost {
          border-radius: 14px;
          padding: 14px 24px;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primary {
          background: #0f172a;
          color: white;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        }

        .primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.22);
        }

        .ghost {
          background: rgba(15, 23, 42, 0.08);
          color: #0f172a;
        }

        .ghost:hover {
          transform: translateY(-3px);
          background: rgba(15, 23, 42, 0.12);
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .features li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(15, 23, 42, 0.8);
        }

        .section {
          background: rgba(255, 255, 255, 0.92);
          border-radius: 24px;
          padding: 40px 36px;
          box-shadow: 0 16px 48px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(10px);
        }

        .section h2,
        .section h3 {
          margin: 0 0 20px;
          font-size: 28px;
        }

        .tips ol {
          padding-inline-start: 20px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 18px;
          line-height: 1.8;
        }

        footer {
          text-align: center;
          color: rgba(15, 23, 42, 0.6);
        }

        footer small {
          font-size: 15px;
        }

        @media (max-width: 640px) {
          .wrapper {
            padding: 64px 18px 48px;
            gap: 40px;
          }

          .hero,
          .section {
            padding: 32px 28px;
          }

          .cta {
            flex-direction: column-reverse;
            align-items: stretch;
          }
        }
      `}</style>
    </main>
  );
}
