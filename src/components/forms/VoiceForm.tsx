"use client";

import { useState } from "react";
import { CheckCircle2, Send, X } from "lucide-react";

const residenceOptions = ["이곡1동", "이곡2동", "신당동", "기타"];
const fieldOptions = ["환경", "공간·시유지", "보행·안전", "청년·주거", "아동·돌봄", "노동·어울림", "소통·의정", "기타"];

export function VoiceForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now().toString());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const required = ["name", "phone", "residence", "field", "title", "content", "privacy"];
    const missing = required.some((key) => !String(formData.get(key) || "").trim());

    if (missing) {
      setError("필수 항목과 개인정보 수집 동의를 확인해 주세요.");
      return;
    }

    const content = String(formData.get("content") || "").trim();
    if (content.length < 10) {
      setError("내용은 10자 이상 입력해 주세요.");
      return;
    }

    setError("");
    setSubmitting(true);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      residence: formData.get("residence"),
      category: formData.get("field"),
      location: formData.get("location"),
      title: formData.get("title"),
      content: formData.get("content"),
      reply: formData.get("reply") === "희망",
      website: formData.get("website"),
      startedAt: formData.get("startedAt"),
    };

    try {
      const response = await fetch("/api/voice", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "의견 접수 중 오류가 발생했습니다.");
      }

      setOpen(true);
      formElement.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "의견 접수 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm md:p-8">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="startedAt" value={startedAt} />
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 font-bold text-[#0B1F66]">
            이름
            <input name="name" className="form-input" placeholder="홍길동" required />
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66]">
            연락처
            <input name="phone" className="form-input" placeholder="010-0000-0000" required />
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66]">
            거주지
            <select name="residence" className="form-input" defaultValue="" required>
              <option value="" disabled>
                선택해 주세요
              </option>
              {residenceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66]">
            분야
            <select name="field" className="form-input" defaultValue="" required>
              <option value="" disabled>
                선택해 주세요
              </option>
              {fieldOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66] md:col-span-2">
            위치
            <input name="location" className="form-input" placeholder="예: 이곡역 인근, 신당동 골목길 등" />
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66] md:col-span-2">
            제목
            <input name="title" className="form-input" placeholder="의견 제목을 입력해 주세요" required />
          </label>
          <label className="grid gap-2 font-bold text-[#0B1F66] md:col-span-2">
            내용
            <textarea
              name="content"
              className="form-input min-h-40 resize-y"
              placeholder="성서에서 바뀌었으면 하는 점을 자세히 남겨주세요."
              required
              minLength={10}
            />
          </label>
        </div>
        <fieldset className="mt-5 rounded-2xl bg-[#F8FAFC] p-4">
          <legend className="font-black text-[#0B1F66]">답변 희망 여부</legend>
          <div className="mt-3 flex gap-4 text-sm font-bold text-[#344054]">
            <label>
              <input type="radio" name="reply" value="희망" className="mr-2" />
              희망
            </label>
            <label>
              <input type="radio" name="reply" value="미희망" className="mr-2" defaultChecked />
              미희망
            </label>
          </div>
        </fieldset>
        <label className="mt-5 flex gap-3 rounded-2xl border border-[#E5E7EB] p-4 text-sm leading-6 text-[#344054]">
          <input type="checkbox" name="privacy" className="mt-1 h-4 w-4 shrink-0" required />
          <span>
            유선경 선거사무소는 유권자 의견 접수 및 답변을 위해 이름, 연락처, 거주지, 의견 내용을 수집합니다. 수집된 정보는 의견 확인 및 답변 목적으로만 사용되며 목적 달성 시 파기됩니다.
          </span>
        </label>
        {error ? <p className="mt-4 font-bold text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="btn-base btn-primary mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="유권자 의견 제출"
        >
          <Send size={18} aria-hidden />
          {submitting ? "접수 중..." : "의견 남기기"}
        </button>
        <p className="mt-4 text-sm leading-6 text-[#667085]">
          제출하신 의견은 선거사무소 담당자 이메일로 전달됩니다. 반복 제출이 의심되는 경우 제한될 수 있습니다.
        </p>
      </form>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F66]/70 p-5" role="dialog" aria-modal="true" aria-label="의견 접수 안내">
          <div className="max-w-md rounded-[2rem] bg-white p-7 text-center shadow-2xl">
            <button type="button" onClick={() => setOpen(false)} className="ml-auto block rounded-full p-2 text-[#667085]" aria-label="성공 안내 닫기">
              <X className="h-5 w-5" aria-hidden />
            </button>
            <CheckCircle2 className="mx-auto h-14 w-14 text-[#0F766E]" aria-hidden />
            <h2 className="mt-4 text-2xl font-black text-[#0B1F66]">의견이 접수되었습니다</h2>
            <p className="mt-3 leading-7 text-[#667085]">유선경 선거사무소가 확인 후 공약과 현장점검에 반영하겠습니다.</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
