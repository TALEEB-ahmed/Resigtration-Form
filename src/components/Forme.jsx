import { useState } from 'react'

export default function Forme() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    speciality: '',
    university: 'جامعة هواري بومدين',
    years: [],
    building: 'A',
    room: '',
    phone: '',
  })

  const [isSuccess, setIsSuccess] = useState(false)

  // للتعامل مع المدخلات العادية والقوائم المنسدلة
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // للتعامل مع خيارات العام الدراسي (Checkbox)
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      const currentYears = prev.years
      if (checked) {
        return { ...prev, years: [...currentYears, value] }
      } else {
        return { ...prev, years: currentYears.filter((y) => y !== value) }
      }
    })
  }  space-x-2 space-x-reverse 

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch('https://sheetdb.io/api/v1/u5nydbyp2687l', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            ...formData,
            years: formData.years.join(', '), // دمج السنوات المختارة في نص واحد
          },
        }),
      })

      setIsSuccess(true)
    } catch (error) {
      console.error(error)
    }
  }

  const inputClass =
    'w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-right text-base placeholder-gray-500 focus:outline-none focus:border-primary transition-all'


  const selectoption =
    'w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-right text-base placeholder-gray-500 focus:outline-none focus:border-primary transition-all'

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
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* الاسم الأول */}
            <div className='' >
              <label className=" block text-md font-semibold text-secondary m-1 text-right">
                الاسم الأول
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="مثال : محمد"
                className={inputClass}
              />
            </div>

            {/* الاسم الأخير */}
            <div>
              <label className="block text-md font-semibold text-secondary m-1 text-right">
                الاسم الأخير
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="مثال : أحمد"
                className={inputClass}
              />
            </div>
          </div>

          {/* التخصص */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              التخصص
            </label>
            <input
              type="text"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              placeholder="مثال : هندسة معمارية"
              className={inputClass}
            />
          </div>

          {/* الجامعة - Select */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              الجامعة
            </label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className={selectoption}
            >
           <option value="USTHB">USTHB</option>
              <option value="ENSTA">ENSTA</option>
              <option value="ENP">ENP</option>
              <option value="كلية العلوم الإسلامية في الجزائر">كلية العلوم الإسلامية في الجزائر</option>
            </select>
          </div>

          {/* العام الدراسي - Checkbox */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              العام الدراسي
            </label>
            <div className="flex flex-wrap   gap-4 text-right">
              {['سنة أولى', 'سنة ثانية', 'سنة ثالثة', 'سنة رابعة', 'سنة خامسة'].map(
                (yearOption) => (
                  <label
                    key={yearOption}
                    className="flex items-center text-center justify-between gap-3 cursor-pointer bg-gray-50 p-3 rounded-xl border border-gray-100 hover:bg-gray-100"
                  >
                    <span className="text-md font-medium text-gray-700">
                      {yearOption}
                    </span>
                    <input
                      type="checkbox"
                      value={yearOption}
                      checked={formData.years.includes(yearOption)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4  text-primary rounded focus:ring-primary"
                    />
                  </label>
                )
              )}
            </div>
          </div>

          {/* اسم العمارة - Select */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              إسم العمارة
            </label>
            <select
              name="building"
              value={formData.building}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="A">العمارة A</option>
              <option value="B">العمارة B</option>
              <option value="C">العمارة C</option>
              <option value="D">العمارة D</option>
              <option value="N">العمارة N</option>
            </select>
          </div>

          {/* رقم الغرفة */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              رقم الغرفة
            </label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="مثال : 22"
              className={inputClass}
            />
          </div>

          {/* رقم الهاتف */}
          <div>
            <label className="block text-md font-semibold text-secondary mb-2 text-right">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="مثال : 05 ** ** ** 67"
              className={inputClass}
            />
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