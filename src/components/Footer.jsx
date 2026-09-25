export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-1">تواصل معنا</h2>
        <p className="text-third font-semibold mb-6 text-lg">📞 0501234567</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4 text-sm text-gray-200">
          <p>📧 info@cub1-mosque.org</p>
          <p>📍 الرياض - حي المسجد الجديد</p>
        </div>

        <p className="mt-6 text-xs text-gray-300">
          جميع الحقوق محفوظة © ٢٠٢٦ • مسجد كيوب ١
        </p>
      </div>
    </footer>
  )
}
