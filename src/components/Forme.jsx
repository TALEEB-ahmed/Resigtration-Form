import { useState } from 'react'

const fields = [
  { name: 'firstName', label: 'الاسم الأول', placeholder: 'مثال : محمد' },
  { name: 'lastName', label: 'الاسم الأخير', placeholder: 'مثال : أحمد' },
  { name: 'speciality', label: 'التخصص', placeholder: 'مثال : هندسة معمارية  ' },
  { name: 'university', label: 'الجامعة', placeholder: 'مثال : جامعة هواري بو مدين ' },
  { name: 'year', label: 'العام الدراسي', placeholder: 'مثال : جامعة هواري بو مدين ' },
  { name: 'building', label: 'إسم العمارة', placeholder: 'مثال : N' },
  { name: 'room', label: 'رقم الغرفة', placeholder: 'مثال : 22' },
  { name: 'phone', label: 'رقم الهاتف', placeholder: 'مثال : 05 ** ** ** 67' },
]

export default function Forme() {
  const [formData, setFormData] = useState(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {})
  )
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }))
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  const newErrors = {}

  fields.forEach((f) => {
    if (!formData[f.name].trim()) {
      newErrors[f.name] = true
    }
  })

  setErrors(newErrors)

  if (Object.keys(newErrors).length > 0) return

  try {
    const response = await fetch(
      'https://sheetdb.io/api/v1/u5nydbyp2687l',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formData,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Failed to submit')
    }

    setIsSuccess(true)
  } catch (error) {
    console.error(error)
  }
}

  const inputClass = (hasError) =>
    `w-full px-4 py-3 border-2 rounded-xl text-right text-base placeholder-gray-400 transition-all duration-200 focus:outline-none ${hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-gray-200 focus:border-primary'
    }`

  if (isSuccess) {
    return (
      <section className="flex justify-center items-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-2">
            تم إرسال النموذج بنجاح!
          </h2>
          <p className="text-gray-600 mb-6">
            بوركتم ونفع الله بكم. شكراً لمشاركتكم، سيتم التواصل معكم قريباً.
          </p>
      
        </div>
      </section>
    )
  }

  return (
    <section className="flex justify-center items-center py-12 px-4 bg-gradient-to-b from-primary/5 to-white">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 sm:p-10">
              <form
                action="https://sheetdb.io/api/v1/u5nydbyp2687l"
                method='POST'
              onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.slice(0, 2).map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-semibold text-secondary mb-2 text-right">
                  {f.label}
                </label>
                <input
                  type={f.name === 'phone' ? 'tel' : 'text'}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  className={inputClass(errors[f.name])}
                />
                {errors[f.name] && (
                  <p className="mt-1 text-xs text-red-500 text-right">
                    هذا الحقل مطلوب
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-2">
            {fields.slice(2).map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-semibold text-secondary mb-2 text-right">
                  {f.label}
                </label>
                <input
                  type={f.name === 'phone' ? 'tel' : 'text'}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  className={inputClass(errors[f.name])}
                />
                {errors[f.name] && (
                  <p className="mt-1 text-xs text-red-500 text-right">
                    هذا الحقل مطلوب
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="border-r-4 border-third bg-gradient-to-r from-third/5 via-primary/5 to-third/5 rounded-xl p-4">
            <p className="text-center text-secondary font-medium text-lg">
              بوركتم ونفع الله بكم
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold text-xl rounded-xl hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  )
}
