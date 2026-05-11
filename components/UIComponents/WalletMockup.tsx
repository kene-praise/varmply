'use client';

const NAV_ITEMS = [
  { label: 'Dashboard',   icon: (active: boolean) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? '#7C3AED' : '#9CA3AF'} strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
  { label: 'Campaigns',   icon: (active: boolean) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? '#7C3AED' : '#9CA3AF'} strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: 'Marketplace', icon: (active: boolean) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? '#7C3AED' : '#9CA3AF'} strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: 'Earnings',    icon: (active: boolean) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? '#7C3AED' : '#9CA3AF'} strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, active: true },
  { label: 'Analytics',   icon: (active: boolean) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active ? '#7C3AED' : '#9CA3AF'} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
];

const TXNS = [
  {
    type: 'payout',
    title: 'Campaign Payout',
    subtitle: 'HEIS · With You — TikTok',
    amount: '+₦45,000',
    date: 'Today, 2:40 PM',
    status: 'Completed',
  },
  {
    type: 'withdrawal',
    title: 'Withdrawal',
    subtitle: 'To GTBank **** 4492',
    amount: '-₦120,000',
    date: 'Yesterday, 11:30 AM',
    status: 'Completed',
  },
  {
    type: 'escrow',
    title: 'Escrow Release',
    subtitle: 'Zara Beats · Jazzy Song',
    amount: '+₦18,500',
    date: 'Apr 28, 09:15 AM',
    status: 'Processing',
  },
];

function TxIcon({ type }: { type: string }) {
  if (type === 'payout') {
    return (
      <div style={{ width: 36, height: 36, borderRadius: 10, background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      </div>
    );
  }
  if (type === 'withdrawal') {
    return (
      <div style={{ width: 36, height: 36, borderRadius: 10, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    );
  }
  return (
    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6D6D78" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    </div>
  );
}

export default function WalletMockup() {
  return (
    <div style={{ background: '#F7F7F9', width: '100%', height: '100%', display: 'flex', fontFamily: 'system-ui,-apple-system,sans-serif', cursor: 'default', userSelect: 'none' }}>

      {/* Sidebar */}
      <div style={{ width: 200, background: 'white', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', padding: '16px 12px', gap: 0, flexShrink: 0, height: '100%' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '0 6px' }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>V</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#0F0F1A', letterSpacing: '-0.02em' }}>Varmply</span>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {NAV_ITEMS.map(({ label, icon, active }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 10px', borderRadius: 9,
                background: active ? '#F5EEFF' : 'transparent',
                border: active ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
              }}
            >
              {icon(!!active)}
              <span style={{ fontSize: 11.5, fontWeight: active ? 700 : 500, color: active ? '#7C3AED' : '#6B7280' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Profile card */}
        <div style={{ borderRadius: 10, border: '1px solid #E5E7EB', background: '#FAFAFA', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.9)' }}>D</span>
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 10.5, fontWeight: 700, color: '#0F0F1A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Dami Adeyemi</p>
            <p style={{ fontSize: 9, color: '#9CA3AF' }}>Creator</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', overflow: 'hidden', height: '100%' }}>
        {/* Page header */}
        <div style={{ marginBottom: 16, flexShrink: 0 }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#BBBBCC', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 3 }}>Creator</p>
          <p style={{ fontSize: 20, fontWeight: 900, color: '#0F0F1A', letterSpacing: '-0.03em', lineHeight: 1 }}>Earnings</p>
        </div>

        {/* Balance card + stat */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, marginBottom: 14, flexShrink: 0 }}>
          {/* Dark balance card */}
          <div style={{ borderRadius: 16, background: '#17171C', padding: '18px 20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -24, right: -24, width: 100, height: 100, borderRadius: 999, background: 'radial-gradient(circle, rgba(37,99,235,0.55) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -12, left: 24, width: 80, height: 80, borderRadius: 999, background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, transparent 70%)', filter: 'blur(16px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 8 }}>Available Balance</p>
              <p style={{ fontSize: 32, fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums', marginBottom: 14 }}>₦145,200</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: '5px 12px', border: '1px solid rgba(255,255,255,0.18)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'white' }}>Withdraw funds</span>
              </div>
            </div>
          </div>

          {/* Pending stat */}
          <div style={{ borderRadius: 16, background: 'white', border: '1px solid #E5E7EB', padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 140 }}>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, color: '#BBBBCC', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Pending</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: '#B45309', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>₦45,000</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: 999, background: '#F59E0B' }} />
              <span style={{ fontSize: 9, fontWeight: 600, color: '#9CA3AF' }}>2 campaigns</span>
            </div>
          </div>
        </div>

        {/* Transactions card */}
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 16, padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexShrink: 0, paddingBottom: 10, borderBottom: '1px solid #F1F2F6' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#0F0F1A' }}>Recent Activity</span>
            <div style={{ borderRadius: 999, background: '#F5EEFF', border: '1px solid rgba(124,58,237,0.12)', padding: '3px 10px' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#7C3AED' }}>View all</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
            {TXNS.map((tx, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < TXNS.length - 1 ? '1px dashed rgba(0,0,0,0.07)' : 'none' }}>
                <TxIcon type={tx.type} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#0F0F1A', marginBottom: 2 }}>{tx.title}</p>
                  <p style={{ fontSize: 9.5, color: '#9CA3AF', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.subtitle}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: tx.amount.startsWith('+') ? '#15803D' : '#0F0F1A', fontVariantNumeric: 'tabular-nums' }}>{tx.amount}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 9, color: '#BBBBCC' }}>{tx.date}</span>
                    <div style={{ borderRadius: 999, padding: '2px 7px', background: tx.status === 'Completed' ? 'rgba(21,128,61,0.1)' : 'rgba(217,119,6,0.12)' }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: tx.status === 'Completed' ? '#15803D' : '#92400E' }}>{tx.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
