'use client';
import React, { useState } from 'react';
import coursesData from '../data/courses.json';

const categories = [
  { label: 'ALL COURSES', value: 'all' },
  { label: 'MFTG COURSE', value: 'mftg' },
  { label: 'MFA COURSE', value: 'mfa' },
  { label: 'POWER BI COURSE', value: 'powerbi' },
];

export default function CourseIncludes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalCourse, setModalCourse] = useState(null);

  const filteredCourses = selectedCategory === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  return (
    <section className="bg-bg dark:bg-bg-dark py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[32px] dark:text-white font-bold">Our <span className="text-primary">Courses</span></h2>
        </div>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`px-6 py-2 rounded-lg font-semibold shadow transition border-2 border-primary ${selectedCategory === cat.value ? 'bg-primary text-white' : 'bg-white dark:bg-bg2-dark text-primary dark:text-primary-dark'}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className={`bg-white dark:bg-bg2-dark rounded-xl shadow-lg p-0 cursor-pointer hover:shadow-2xl transition flex flex-col overflow-hidden ${course.span === 2 ? 'md:col-span-2' : ''}`}
              onClick={() => setModalCourse(course)}
            >
              {/* Card Image with badge overlay */}
              <div className="relative w-full h-48">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white rounded shadow px-4 py-2 flex items-center gap-2">
                  <img src="/img/logo.png" alt="Yugen" className="h-6 w-auto" />
                  <span className="text-xs font-semibold text-gray-700">100% job assured <br />Course</span>
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg dark:text-white mb-2">{course.title}</h3>
                <p className="text-gray-700 dark:text-dark3-dark flex-1 mb-4 line-clamp-3">{course.shortDescription}</p>
                <div className="mb-4">
                  <span className="block text-sm font-semibold text-gray-700 mb-1">Flexible Timings</span>
                  <span className="text-yellow-500 font-bold">★ {course.rating}</span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href={course.applyLink} target="_blank" rel="noopener" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex-1 text-center">Apply Now</a>
                  <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition flex-1" onClick={e => { e.stopPropagation(); setModalCourse(course); }}>Know More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modalCourse && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setModalCourse(null)}>
            <div className="bg-white dark:bg-bg2-dark rounded-xl shadow-xl max-w-lg w-full p-8 relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-primary" onClick={() => setModalCourse(null)}>&times;</button>
              <div className="flex items-center gap-4 mb-4">
                <img src={modalCourse.icon} alt={modalCourse.title} className="w-16 h-16 object-contain rounded-lg bg-bg dark:bg-bg-dark p-2" />
                <div>
                  <h3 className="font-bold text-2xl dark:text-white">{modalCourse.title}</h3>
                  <span className="text-xs text-primary font-semibold">{modalCourse.categoryLabel}</span>
                </div>
              </div>
              <p className="mb-4 text-gray-700 dark:text-dark3-dark">{modalCourse.description}</p>
              <ul className="list-disc pl-6 mb-4">
                {modalCourse.topics && modalCourse.topics.map((topic, i) => (
                  <li key={i} className="text-gray-700 dark:text-dark3-dark">{topic}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-500 font-bold">★ {modalCourse.rating}</span>
                <a href={modalCourse.applyLink} target="_blank" rel="noopener" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Apply Now</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 