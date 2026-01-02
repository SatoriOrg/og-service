interface OgProps {
  title: string;
  subtitle: string;
  section: string;
  displayType: string;
  portalLink?: string;
  rank?: string | null;
  logoBase64?: string | null;
}

export const getOgTemplate = ({
  title,
  subtitle,
  portalLink,
  section,
  displayType,
  rank,
  logoBase64,
}: OgProps) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F8FAFC',
        padding: '60px',
        position: 'relative',
        fontFamily: 'Outfit',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '-300px',
          right: '-300px',
          width: '900px',
          height: '900px',
          background: 'rgba(99, 102, 241, 0.1)',
          filter: 'blur(120px)',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: '-200px',
          right: '200px',
          width: '600px',
          height: '600px',
          background: 'rgba(168, 85, 247, 0.08)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {logoBase64 ? (
            <img src={logoBase64} style={{ width: '48px', height: '48px' }} alt="Logo" />
          ) : null}
          <div
            style={{
              display: 'flex',
              fontSize: '32px',
              color: '#1E293B',
              fontWeight: 500,
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {section}
            <span style={{ color: '#94A3B8' }}>•</span>
            <span style={{ color: '#475569' }}>{displayType}</span>
          </div>
        </div>

        {rank ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 24px',
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              borderRadius: '9999px',
              boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '28px',
                color: '#FFFFFF',
                fontWeight: 700,
              }}
            >
              Rank #{rank}
            </div>
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          gap: '12px',
          marginTop: '-20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '96px',
            fontWeight: 800,
            color: '#1E293B',
            lineHeight: 1.1,
            letterSpacing: '-2px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            color: '#64748B',
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                width: '12px',
                height: '12px',
                background: '#6366F1',
                borderRadius: '50%',
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                fontSize: '24px',
                color: '#475569',
                fontWeight: 500,
              }}
            >
              {portalLink}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="#64748B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
              />
            </svg>
            <div
              style={{
                display: 'flex',
                fontSize: '24px',
                color: '#64748B',
                fontWeight: 500,
              }}
            >
              Unofficial
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', fontSize: '24px', color: '#94A3B8' }}>by</div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              color: '#1E293B',
              fontWeight: 600,
            }}
          >
            MrAdityaAlok
          </div>
        </div>
      </div>
    </div>
  );
};
