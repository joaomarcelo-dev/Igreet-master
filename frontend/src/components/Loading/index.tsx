import './style.scss';

export default function Loading() {
  return (
    <div className="content-loading-spinner">
      <div
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
} 